# Next.js + Newt + Sass（SCSS記法） + ESlint + Stylelint + Prettier のテンプレート

## 使用技術

- `Next.js`（`TypeScript`は未使用）
- `Sass`（SCSS記法）
- `Visual Studio Code`
- `ESLint`, `Stylelint`, `Prettier`
- ヘッドレスCMS（[Newt](https://www.newt.so/)）の雛形搭載済み

---

## 環境構築

### 必要なモジュールをインストール
```
$ npm i
```

Node.js `v18.12.0`にて検証済み

### VSCodeの拡張機能インストール（ESLint, Stylelint, Prettier）
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

VSCode `v1.74.2`にて検証済み

### .env作成

`.env.example`を複製してファイル名を`.env`にする

---

## 開発

ローカルサーバ立ち上げ（デフォルト: http://localhost:3000/ ）
```
$ npm run dev
```

ビルド
```
$ npm run build
```

構文チェック（保存時に自動整形されるので使うことはほぼ無い）
```
$ npm run lint // ES
$ npm run lint:fix // ES
$ npm run lint:style // CSS
$ npm run lint:style:fix // CSS
```
