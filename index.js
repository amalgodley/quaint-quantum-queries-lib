import _ from 'lodash';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

class QuaintQuantumQueries {
  constructor(data = []) {
    this.data = data;
    this.queryId = uuidv4();
  }

  addRecord(record) {
    this.data.push(record);
    return this;
  }

  findByDate(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return _.filter(this.data, (d) => moment(d.date).format('YYYY-MM-DD') === formattedDate);
  }

  findById(id) {
    return _.find(this.data, { id });
  }
}

export default QuaintQuantumQueries;
