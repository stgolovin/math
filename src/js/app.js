class Character {
  constructor(attackRange) {
    this.attackRange = attackRange;
    this.stoned = false;
  }

  get attack() {
    const baseAttack = this.calculateBaseAttack();
    return this.stoned ? this.calculateStonedAttack(baseAttack) : baseAttack;
  }

  calculateBaseAttack() {
    const maxAttackRange = 5;
    const linearFactor = 100 / maxAttackRange;
    const distance = Math.min(this.attackRange, maxAttackRange);
    return 100 - (distance - 1) * linearFactor;
  }

  calculateStonedAttack(baseAttack) {
    const logFactor = Math.log2(this.attackRange) * 5;
    return Math.max(baseAttack - logFactor, 0);
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

export class Magician extends Character {
  constructor(attackRange) {
    super(attackRange);
  }
}

export class Daemon extends Character {
  constructor(attackRange) {
    super(attackRange);
  }
}
