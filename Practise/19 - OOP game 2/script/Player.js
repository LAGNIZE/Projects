class Player {
	constructor(name, back) {
		document.querySelector('body').innerHTML += `
    <div class="player" style="width: 50px; height: 50px">

    </div>
    `;
		this.dom = document.querySelector('.player:last-child');
		this.name = name;
		this.dom.style.backgroundImage = back;
		this.dom.style.backgroundSize = "cover";
		this.magic = 0;
		this.power = 0;
		this.health = 0;
		this.stamina = 0;
		this.fire = 0;
	}
	upgradeMagic() {
		this.magic = this.magic + 1
		console.log(this.magic)
		if (this.magic > 5) {
			this.dom.style.backgroundImage = "url(./img/enemy.png)";
		}
	}
	upgradePower() {
		this.power = this.power + 1
		console.log(this.power)
	}
	upgradeHealth() {
		this.health = this.health + 1
		console.log(this.health)
	}
	upgradeStamina() {
		this.stamina = this.stamina + 1
		console.log(this.stamina)
	}
	upgradeRange() {
		this.fire = this.fire + 1
		console.log(this.fire)
	}
	showParameters() {
		document.querySelector("body").innerHTML += `
            <div>
                Hey! My name is ${this.name}, my magic level - ${this.magic}, my power - ${this.power}, my stamina - ${this.stamina}, my fire level - ${this.fire}.
			</div>
        `
	}
}