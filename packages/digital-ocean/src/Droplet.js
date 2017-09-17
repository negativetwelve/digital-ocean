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
      url: '/v2/droplets',
      params,
    });

    return new this(response.droplet);
  }

  constructor(params) {
    this.params = params;
  }

  // --------------------------------------------------
  // Methods
  // --------------------------------------------------

}


export default Droplet;
