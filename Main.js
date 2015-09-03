var game = new Phaser.Game(1024, 960, Phaser.CANVAS);

game.global = {};

game.state.add('boot', new Boot(game));
game.state.add('load', new Load(game));
game.state.add('menu', new Menu(game));
game.state.add('game', new Game(game));
game.state.add('win', new Win(game));
game.state.add('lose', new Lose(game));
game.state.start('boot');