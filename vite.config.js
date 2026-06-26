import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom plugin to efficiently stream large video files, bypassing Vite's standard static server limits
const largeVideoServerPlugin = () => {
  return {
    name: 'large-video-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/14713469_3840_2160_25fps.mp4') {
          console.log('[VIDEO PLUGIN] Intercepted video request! Range:', req.headers.range);
          const videoPath = path.resolve(__dirname, 'public', '14713469_3840_2160_25fps.mp4');
          
          if (!fs.existsSync(videoPath)) {
            res.statusCode = 404;
            return res.end('Video not found');
          }

          const stat = fs.statSync(videoPath);
          const fileSize = stat.size;
          const range = req.headers.range;

          if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fs.createReadStream(videoPath, { start, end });
            const head = {
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunksize,
              'Content-Type': 'video/mp4',
            };
            res.writeHead(206, head);
            file.pipe(res);
          } else {
            const head = {
              'Content-Length': fileSize,
              'Content-Type': 'video/mp4',
            };
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
          }
        } else {
          next();
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), largeVideoServerPlugin()],
  server: {
    watch: {
      ignored: ['**/public/**']
    }
  }
})
