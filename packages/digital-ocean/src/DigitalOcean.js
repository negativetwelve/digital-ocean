// Libraries
import API from 'handy-api';

// Modules
import Droplet from './Droplet';


/**
 * Represents the client that connects to the Digital Ocean v2 API.
 */
class DigitalOcean {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  constructor({token}) {
    this.token = token;
    this.api = new API({url: 'https://api.digitalocean.com'});
  }

  get headers() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    };
  }

  // --------------------------------------------------
  // Request
  // --------------------------------------------------
  async request({method, url, params}) {
    return this.api.request({method, url, params, headers: this.headers});
  }

  // --------------------------------------------------
  // Methods
  // --------------------------------------------------
  async createDroplet(options) {
    return Droplet.create({...options, client: this});
  }

}


export default DigitalOcean;
