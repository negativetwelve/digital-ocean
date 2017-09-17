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
    const {status} = response;

    if (status >= 200 && status < 300) {
      return new this(json.droplet);
    }

    // If the request failed, we need to throw an error with the text.
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
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
