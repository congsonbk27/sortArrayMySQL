B1: sudo npm install -g express-generator
B2: cd 'folderPath'
B3: express
B4: npm install
B5: npm start
B6: http://localhost:3000
B7: npm install ejs --save
B8: mở file app.js lên và sửa app.set('view engine', 'jade'); thành app.set('view engine', 'ejs');    (ở line 14).
B9: xóa các file .jade không cần thiết trong folder views
B10: npm uninstall jade --save
B11: tạo file 'index.ejs' ở trong folder views:
<h2>Hello Word</h2>
B12: npm start
B13: http://localhost:3000
B14: npm install mysql
B19: sudo npm install -g nodemon
B20:  Sửa file package.json ở dòng 6:     "start": "node ./bin/www" thành    "start": "nodemon ./bin/www"
B21: npm start
B22: http://localhost:3000
