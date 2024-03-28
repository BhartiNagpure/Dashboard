import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const format = "MM/DD/YYYY";

export default function InvoiceBulk() {
  const [dates, setDates] = useState([]);

  return (
    <>
      <div className="multi-date">
        <Form>
          <Row className="mb-3 d-flex flex-column">
            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridState"
              className="mb-4"
            >
              <Form.Select defaultValue="Choose...">
                <option>SALES</option>
                <option>CREDIT NOTE</option>
                <option>DEBIT NOTE</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              lg={4}
              md={4}
              sm={12}
              controlId="formGridDates"
              className="form-group-container"
            >
              <Form.Label className="form-label">Select Dates</Form.Label>

              <div className="text-center mb-5 date-picker">
                <DatePicker
                  value={dates}
                  onChange={setDates}
                  multiple
                  sort
                  format={format}
                  calendarPosition="bottom-center"
                  plugins={[<DatePanel />]}
                  placeholder="Select Dates"
                  style={{width:'25rem', height:'2rem'}}
                />
              </div>
              <ul className="selected-dates-list">
                {dates
                  ? dates.map((date) => (
                      <li key={date.format()} className="selected-date">
                        {date.format()}
                      </li>
                    ))
                  : null}
              </ul>
            </Form.Group>
          </Row>

          <Button
            variant="primary"
            type="submit"
            className="btn Btn border-0 text-black"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
