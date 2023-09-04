import React,{useState, useEffect,useCallback, useMemo} from 'react'
import './calendar.module.css'
import moment from 'moment'
import PropTypes from 'prop-types'
import {
  Calendar as BigCalendar,
  Views, momentLocalizer, DateLocalizer
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {useForm} from 'react-hook-form'

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2023, 0, 29, 9, 0, 0),
    end: new Date(2023, 0, 29, 13, 0, 0),
    resourceId: 1
  },
  {
    id: 1,
    title: "MS training",
    allDay: true,
    start: new Date(2023, 0, 29, 14, 0, 0),
    end: new Date(2023, 0, 29, 16, 30, 0),
    resourceId: 2
  },
  {
    id: 2,
    title: "Team lead meeting",
    start: new Date(2023, 0, 29, 8, 30, 0),
    end: new Date(2023, 0, 29, 12, 30, 0),
    resourceId: 3
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2023, 0, 30, 7, 0, 0),
    end: new Date(2023, 0, 30, 10, 30, 0),
    resourceId: 4
  }
];

const resourceMap = [
  { resourceId: 1, resourceTitle: "Board room" },
  { resourceId: 2, resourceTitle: "Training room" },
  { resourceId: 3, resourceTitle: "Meeting room 1" },
  { resourceId: 4, resourceTitle: "Meeting room 2" }
];

const styles = {
  container: {
    width: "80wh",
    height: "80vh",
    margin: "2em"
  }
};

export default function CustomCalendar() {
  const {register, handleSubmit} = useForm()
  const [isClient, setIsClient] = useState(true) // for hydration
  const [myEvents, setEvents] = useState(events)
  const [showModal, setModal] = useState(false)

  useEffect(() => {
    setIsClient(false)
  }, [])

  const toggleModal = () => {
    setModal(true)
  }

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  )

  // used this method to avoid hydration. see nextjs docs for more information
  const  submit = async (data)=>{
    // setData(data)
    console.log(data)
    // try {
    //     const response = await fetch('/api/patient', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(data),
    //     });
    //     const result = await response.json();
    //     console.log(result)
    //   } catch (error) {
    //     console.error('Error submitting data:', error);
    //   }
    };

  const Modal = () => {
    return(
      <div className="card">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(submit)}>
            <div className="row">
              <div className="col">
                {/* <!-- Event title input --> */}
                <div className="form-outline">
                  <label className="form-label" htmlFor="form8Example3">Event name</label>
                  <input type="text" id="form8Example3" className="form-control"{...register('eventTitle')} />
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- Date input --> */}
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form8Example3">Start Date</label>
                  <input type="datetime-local" id="form8Example3" className="form-control"{...register('startDate')} />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="form8Example3">End Date</label>
                  <input type="datetime-local" id="form8Example3" className="form-control"{...register('endDate')} />
                </div>
              </div>
            </div>
            <div className="row" >
              <button type="submit" className="btn btn-primary ms-2">Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  return (
    <>
    {isClient?<div><p>hey</p></div>:
    <div style={styles.container}>
      <BigCalendar
        selectable
        localizer={localizer}
        events={myEvents}
        defaultView={Views.WEEK}
        views={[Views.DAY, Views.WEEK, Views.MONTH]}
        steps={60}
        defaultDate={new Date()}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        scrollToTime={scrollToTime}
      />
    </div>}
    {showModal?<Modal/>:<div></div>}
    </>
  );
}

CustomCalendar.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
}