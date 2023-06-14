import neo4j, {Driver} from 'neo4j-driver';
import {NEO4J_PASSWORD, NEO4J_URI, NEO4J_USER} from "../config";

class Neo4jService {
  private driver: Driver;
  constructor (
    uri: string = NEO4J_URI,
    user: string = NEO4J_USER,
    password: string = NEO4J_PASSWORD
  ) {
    this.driver = neo4j.driver(
      uri,
      neo4j.auth.basic(
        user,
        password
      )
    );
  }

  async run(query: string, params: object) {
    const session = this.driver.session();

    try {
      return await session.run(query, params);
    } finally {
      await session.close();
    }
  }

  async read(query: string, params: object) {
    const session = this.driver.session();

    try {
      return await session.executeRead(
          tx => tx.run(query, params)
      );
    } finally {
      await session.close();
    }
  }

  async write(query: string, params: object) {
    const session = this.driver.session();

    try {
      return await session.executeWrite(tx => tx.run(query, params));
    } finally {
      await session.close();
    }
  }

  async close() {
    await this.driver.close();
  }
}

const neo4jService = new Neo4jService();
export default neo4jService;