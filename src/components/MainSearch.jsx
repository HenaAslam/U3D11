import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { getjobsActionAsync, setusernameaction } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  // const [jobs, setJobs] = useState([])


  const username=useSelector(state=>state.user.name)


const [inputValue,setInputvalue]=useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jobsFromReduxStore = useSelector((state) => state.job.jobs)
  // const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // try {
    //   const response = await fetch(baseEndpoint + query + '&limit=20')
    //   if (response.ok) {
    //     const { data } = await response.json()
    //     setJobs(data)
    //   } else {
    //     alert('Error fetching results')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    dispatch(getjobsActionAsync(query))

  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>



{username ? (<><span className='mr-2'>Hello, {username}</span><Button onClick={() => navigate('/favourites')}>Favourites</Button></>) : (
<Form onSubmit={e=>{
  e.preventDefault()
  dispatch(setusernameaction(inputValue))
}}>
  <Form.Group >
  
    <Form.Control type="text" placeholder="Enter username" className='w-25' value={inputValue} onChange={(e)=>{
              setInputvalue(e.target.value)
    }}/>
   
  </Form.Group>

  
</Form>)}
          
        
        
        
        
        </Col>




        <Col xs={10} className="mx-auto">
          {username?   <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form> : ""}
        
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsFromReduxStore.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
