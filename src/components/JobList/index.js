// C:\Users\kanka\Downloads\jobby-App-master\jobby-App-master\src\components\JobList\index.js

import {Component} from 'react'
import './index.css'
import JobItem from '../JobItem'

class JobList extends Component {
  render() {
    const {jobList} = this.props

    const ele = (
      <div className="jobListCont">
        {jobList.map(eachItem => (
          <JobItem jobItem={eachItem} />
        ))}
      </div>
    )

    return ele
  }
}

export default JobList
