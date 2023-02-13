import { useEffect,  } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCompanyActionAsync } from '../redux/actions'
import { useSelector } from 'react-redux'

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([])
  const params = useParams()
  const dispatch = useDispatch()
  // const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?company='

  useEffect(() => {
    dispatch(getCompanyActionAsync(params.companyName))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const companyFromReduxStore = useSelector((state) => state.company.com)
  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setJobs(data)
  //     } else {
  //       alert('Error fetching results')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Row>
        <Col>
          {companyFromReduxStore.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
