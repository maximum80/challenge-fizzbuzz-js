# FizzBuzz
これはFizzBuzz問題を解くアルゴリズムを実装するチャレンジです。  

## 内容
1から100までの数をプリントするプログラムを書いてください。
ただし3の倍数のときは数の代わりに「Fizz」と、5の倍数のときは「Buzz」を返し、3と5両方の倍数の場合には「FizzBuzz」と返すこと。

## 問題
### ステップ1, FizzBuzzの問題を解く関数を実装してください
- [test.public.js](test/test.public.js) にテストコードが記載されています。
- [app.js](app.js)を編集して、こちらを全て通過するFizzBuzzを解く関数 "fizzbuzz" を実装してください。  
処理を分けるために自分で関数を新しく作っても問題ございませんが、最終的に答えを返すのは fizzbuzz 関数で行ってください。

### 条件
<table>
  <tr>
    <td><b>Input</b></td>
    <td>1</td>
    <td>3</td>
    <td>5</td>
    <td>15</td>
  </tr>
  <tr>
    <td><b>Output</b></td>
    <td>1</td>
    <td>Fizz</td>
    <td>Buzz</td>
    <td>FizzBuzz</td>
  </tr>
</table>

### ステップ2, あなたの書いたコードについて説明してください
[answer.md](./answer.md) というファイルを用意してあるので、その中に
- どのように実装したか
- どのような事に気をつけて実装したか、工夫した点は何か
等を書いてください。

## 期待するテストの実行結果
- テストの実行結果として以下の表示がされればクリアです。

```
codecheck: Finish with code 0
codecheck: tests  : 4
codecheck: success: 4
codecheck: failure: 0
```

---
## テストの実行方法
- codecheckでは、テストコードを実行して自分が正しく回答できているかどうかを確かめることができます
- Webエディタで受験している場合は、エディタ下にあるコンソールの”Run”ボタンをクリックしてください
- GitHubを活用したローカル受験では、以下の手順に従ってcodecheck CLIをインストールし、テストを実行してください

- クローンしたプロジェクトのroot folderに移動し、以下のコマンドでCLIをインストールします
```
$ npm install codecheck -g
```

- テストを実行するにはroot folderから `codecheck`と入力し、実行してください
