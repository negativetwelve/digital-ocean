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

  // --------------------------------------------------
  // Properties
  // --------------------------------------------------
  constructor(props) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  // --------------------------------------------------
  // Methods
  // --------------------------------------------------

}


export default Droplet;
