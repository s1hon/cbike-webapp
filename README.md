# Cbike-webapp

有使用過c-bike 手機app的人應該有跟我一樣的感覺，就是整體動線非常差。所以開了這個repo來製作一個新的Webapp，來改進原本舊的App動線。如果有興趣的人歡迎加入開發 :)

## 未來規劃
- 即時資料來源採用 [高雄市公共腳踏車即時租賃站資訊](http://data.kaohsiung.gov.tw/Opendata/DetailList.aspx?CaseNo1=AH&CaseNo2=6&Lang=C)
- 使用[Google Maps API](https://developers.google.com/maps/?hl=zh-tw)作為主要地圖標示
- <del>使用[React.js](https://facebook.github.io/react/)作為主要編寫框架 (目前是規劃每3s會自動更新資料)</del>
- 直接把webapp放置在GithubPages (未來會直接綁定至cbike.seans.tw)

## 使用方式

```
    $ npm install -g gulp
    $ npm install
    $ (sudo) gem install sass
    $ gulp
```


## 授權方式

The MIT License (MIT)

Copyright (c) 2016 Cbike-webapp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
