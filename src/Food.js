export default class Food {
  constructor (foodJSON) { // en paramètre un aliment au format JSON
    this._id = foodJSON.id
    this._name = foodJSON.nom
    this._qte = foodJSON.qte
    this._picture = foodJSON.photo ?? ""
  }
  get name() { return this._name }
  get id() { return this._id }
  get quantity() { return this._qte }
  get picture() { return this._picture }
  toString() { return '${this._name} (${ this._qte})'; }
}
