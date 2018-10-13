const Bookshelf = require("../bookshelf");
require("./albumModel");

const Artist = Bookshelf.Model.extend({
	tableName: "artists",
	hasTimestamps: true,
	albums() {
		return this.hasMany("Album", "artist_id").orderBy("id", "ASC");
	}
});

module.exports = Bookshelf.model("Artist", Artist);
