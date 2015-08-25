/**
 * @author Benjamin-Dobell / http://glassechidna.com.au/
 */

function Reference( uuid ) {

	this.uuid = uuid;
	this.type = 'Reference';

}

Object.assign( Reference.prototype, {

	toJSON: function ( meta ) {

		var data = {
			metadata: {
				version: 4.4,
				type: 'Reference',
				generator: 'Reference.toJSON'
			}
		};

		data.uuid = this.uuid;
		data.type = this.type;

		return data;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.uuid = source.uuid;

		return this;

	}

} );

export { Reference };
