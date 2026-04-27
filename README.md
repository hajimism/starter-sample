# starter-sample

Next.js + React のスターターテンプレート。

## 前提条件

- [mise](https://mise.jdx.dev/) — ランタイムバージョン管理
- [Cursor](https://cursor.com/) or VS Code — エディタ（推奨拡張が `.vscode/extensions.json` に定義済み）

## セットアップ

mise がシェルエイリアスを提供する: `mi` = `bun install`、`mr` = `bun run`。

```bash
# mise でランタイムをインストール（Node 24 + Bun）
mise install

# 依存パッケージをインストール
mi

# .env の復号鍵を設定（チームメンバーから受け取る）
# .env.keys ファイルを配置するか、環境変数として設定
export DOTENV_PRIVATE_KEY="..."

# 開発サーバー起動
mr dev
```

## スクリプト

| コマンド | 説明 |
|---|---|
| `mr dev` | 開発サーバー起動 |
| `mr build` | プロダクションビルド |
| `mr start` | プロダクションサーバー起動 |
| `mr check` | Biome によるリント・フォーマット検証 |
| `mr fix` | Biome による自動修正 |
| `mr test` | テスト実行 |
| `mr test:watch` | テスト（ウォッチモード） |
| `mr storybook` | Storybook 起動 |

## 環境変数

[dotenvx](https://dotenvx.com/) で管理。`.env` は暗号化された状態でリポジトリにコミットする。

```bash
# 値を追加・変更した後に暗号化
dotenvx encrypt

# 復号鍵は .env.keys に保存される（gitignore 済み）
```

環境変数は `env/server.ts` / `env/client.ts` で valibot スキーマにより検証され、不正な値があればビルド時にエラーになる。

## ディレクトリ構成

```
app/          # Next.js App Router（ページ、レイアウト）
common/       # 共通ユーティリティ・コンポーネント
  components/ # 再利用可能な UI コンポーネント
  hooks/      # カスタム React Hooks
  lib/        # ユーティリティ関数（ライブラリの re-export）
model/        # ドメイン層（型、スキーマ、ビジネスロジック）
env/          # 環境変数のスキーマ定義・検証
```

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router) / React 19
- **言語**: TypeScript (strict)
- **スタイリング**: Tailwind CSS 4
- **リント・フォーマット**: Biome
- **テスト**: Vitest
- **UI カタログ**: Storybook
- **環境変数**: dotenvx + valibot
- **パッケージマネージャー**: Bun
