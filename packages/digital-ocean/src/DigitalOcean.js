// Modules
import Droplet from './Droplet';


class DigitalOcean {

  constructor({token}) {
    this.token = token;
  }

  async createDroplet(options) {
    return Droplet.create(options);
  }

}


export default DigitalOcean;
