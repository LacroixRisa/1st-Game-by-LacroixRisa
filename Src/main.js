async function main() {
	// var xb = 5
	// SetColor("red")
	// DrawText(xb, 300, 300)
	// for (let cnt = 0; cnt < 100; cnt++) {
	// 	// "cnt" is a variable that memorizes the number of loops
	// 	//   It starts from 0, and increases by 1 every time it loops
	// 	//   In fast words, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

	// 	// y position.
	// 	//   This is how to use "cnt" efficiently
	// 	//   This makes "y" shift by 30 per loop
	// 	var y = 100 + cnt * 1

	// 	// Draw the number
	// 	//   Becareful that cnt starts from 0
	// 	SetColor("black")
	// 	DrawText(0, 200, y)
	// 	await Sleep(100)
	// 	SetColor("white")
	// 	// erase black workds and white it out
	// 	DrawRect(0, 0, GetCanvasSize()[0], GetCanvasSize()[1])
	// }

	//variable; 変数、メモリーのようなもの
	var score = 0
	var highscore = 0

	class Ball {
		constructor() {
			this.x = Math.random() * 800
			this.y = Math.random() * 800 - 800
		}
	}

	balls = [] //空っぽのリスト
	for (let cnt = 0; cnt < 100; cnt++) {
		//Pushリストにデータを追加
		balls.push(new Ball())
	}

	// balls = [new Ball(), new Ball()]
	// balls[1].x = 300

	var x = 100
	var y = 100

	// if (3 != 1) {
	// 	//!=:not equal, ==:equal, &&:and, ||:or
	// 	DrawText("true", 100, 100)
	// } else {
	// 	DrawText("false", 100, 100)
	// }

	for (;;) {
		//;;:infinity loop
		SetColor("white")
		DrawRect(0, 0, GetCanvasSize()[0], GetCanvasSize()[1])

		SetColor("black")
		SetFont("50px Arial")
		score += 0.05

		DrawText(Math.floor(score), 700, 100)
		SetColor("red")
		DrawText(Math.floor(highscore), 700, 150)

		if (score > highscore) {
			highscore = score
		}

		SetColor("blue")
		DrawCircle(x, y, 10)

		if (GetKey("ArrowDown")) {
			y += 1
			// SetColor("black")
			// DrawText("pushed", 100, 100)
		}

		if (GetKey("ArrowUp")) {
			y -= 1
		}

		if (GetKey("ArrowRight")) {
			x += 1
		}

		if (GetKey("ArrowLeft")) {
			x -= 1
		}

		//ボールごとの処理
		//lengthリストの個数
		SetColor("black")
		for (let cnt = 0; cnt < balls.length; cnt++) {
			//描く
			if (Math.sqrt((balls[cnt].x - x) ** 2 + (balls[cnt].y - y) ** 2) < 20) {
				//半径が10だから、直径が20のボールと当たらないようにするため、斜辺の長さを求めることで、当たり判定をしている
				SetColor("red")
				//それが当たっていたら、ボールの色を赤にしている
				score = 0
			} else {
				SetColor("black")
			}

			DrawCircle(balls[cnt].x, balls[cnt].y, 10)
			if (balls[cnt].y > 600) {
				balls[cnt].y = Math.random() * 800 - 800
			}

			//動かす
			balls[cnt].y += 1
		}

		await Sleep(1) //infinityの時は入り込めないから、to function, it needs rest
	}

	// var a = [1, 2, 3, 4, 7] //list (list & loopはよく一緒に使う))
	// DrawText(a[4], 100, 100) //0 indexed

	// var y = 100
	// for (let cnt = 0; cnt < 5; cnt++) {
	// 	DrawText(a[cnt], 100, y)

	// 	y += 10
	// // }

	// class student {
	// 	constructor() {
	// 		this.math = 100
	// 		this.english = 70
	// 	}
	// }

	// // //インスタンスを作る st0の中にインスタンスを入れた
	// var st0 = new student()
	// st0.math = 80

	// DrawText(st0.math, 100, 100)
	// DrawText(st0.english, 100, 110)

	// var st1 = new student()
	// st1.math = 30
	// st1.english = 22

	// DrawText(st1.math, 150, 100)
	// DrawText(st1.english, 150, 110)

	// //オブジェクト思考→全てのことをClassだと考える、ドット（.）が出てくるとクラスを使用している
}
