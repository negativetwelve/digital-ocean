/**
 * Represents a physical Droplet or server that you create on Digital Ocean.
 */
class Droplet {

  // --------------------------------------------------
  // Create
  // --------------------------------------------------
  static async create({client, ...params}) {
    const response = await client.request({
      method: 'POST',
      path: '/v2/droplets',
      params,
    });

    const json = await response.json();
    const {droplet} = json;

    return new this(droplet);
  }

  constructor(params) {
    this.params = params;
  }

  // --------------------------------------------------
  // Methods
  // --------------------------------------------------

}


export default Droplet;
