# React 學習項目分享
#### 這是我學習React的過程分享，希望可以用來幫助有需要的人
學習素材：https://www.youtube.com/watch?v=F627pKNUCVQ&t=77s

## 初始化React項目
1. 在vscode打開為項目準備好的空文件夾，在terminal中輸入命令 
```
npx install create-react-app ./
```
2. 等項目安裝好後將原本的src文件夾刪除，並創建一個新的文件夾，把它同樣命名為src，這裡我們要自己搭建src文件夾的內容。
3. 在src文件夾中創建index.js文件，並輸入如下代碼：
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```
4. 在src文件夾中創建App.js文件，並輸入如下代碼（也可以在第一行輸入rafce，並點擊Enter）：
``` javascript
import React from 'react'

const App = () => {
  return (
    <div>

    </div>
  )
}
export default App 
```
5. 我們嘗試加上一個標簽
``` javascript
import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
export default App 
```
6. 現在在terminal裡輸入
```
npm start
```
就可以看到我們的React項目在localhost:3000上跑起來了!!!
## 項目前期準備
1. 添加React插件
在控制台中數入命令
```
npm install react-icons
```
2. 在src目錄下新建components文件夾用來存放網頁的各個組件，components文件目錄如下：
    - components
        - article
            - Article.jsx
            - article.css 
        - brand
            - Brand.jsx
            - brand.css
        - cta
            - CAT.jsx
            - cat.css
        - feature
            - Feature.jsx
            - feature.css
        - navbar
            - Navbar.jsx
            - navbar.css
- cta (call to action)：的中文翻譯為行動呼籲，以字面上的意思來說既是號召、呼籲，以作出某種行動。CTA可以應用在各類網站、EDM或是Banner上以促使使用者達成轉換。舉例來說，當訪客來到你的活動網頁後，你希望他們達成的目標動作。
- navbar: navigation bar

2.1 並在所有component下的.jsx文件中輸入如下代碼：
```javascript
// 這裡以 article 文件夾下的文件為例
import React from 'react';
import './article.css';

const Article = () => {
  return (
    <div>
        Article
    </div>
  )
}

export default Article
```
2.2 為components中的組件建立索引文件，在components文件下加入index.js文件並輸入如下編碼：

``` javascript
export { default as Article } from './article/Article';
export { default as Brand } from './brand/Brand';
export { default as CTA } from './cta/CTA';
export { default as Feature } from './feature/Feature';
export { default as Navbar } from './navbar/Navbar';
```
    就可以進行引用了，引用方式如下：
```javascript
import { Article, Brand, CTA, Feature, Navbar} from './components';
```
3. 創建containers文件目錄，container可以看成多個components的集合，containers目錄如下：
    - container (基本上和components文件目錄相同)
        - blog
            - ...jsx
            - ...css
        - features
        - footer
        - header
        - possibility
        - whatGPT3
4. 創建好components和containers後在App.js進行引用，如此項目的前期工作就基本完成了！
``` javascript
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
```
## 正式開始編寫我們的第一個React項目！
1. 在App.js中利用先前引用的container搭建出應用程序的初始模板
```javascript
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
```
2. 創建App.css以定全局樣式和index.css用來設定樣式的全局變量
3. 逐步編寫每個組件和模塊
## 最終實現的網頁
![image](https://github.com/ZhangChingYu/Learning-React/blob/46816b6b2879fa1423449e93da87a62460f2a8e2/images/ScreenRecord.mp4)

# 知識點總結
## 1. 圖片插入
```javascript
<img src="圖片所在路徑（本地路徑）" alt="要顯示圖片的代替文字"/>
```
或者
```javascript
import imgUrl from '圖片路徑（本地路徑）';
...
<img src={imgUrl} alt="要顯示圖片的代替文字"/>
```

## 2. 指定頁面位置跳轉


## 界面設計使用的 Tool List
* UI/UX設計：https://www.figma.com
* 漸變顏色：https://angrytools.com/gradient/
* CSS動畫：https://animista.net