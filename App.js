import React, { Suspense } from "react"
import './App.css';
import { createResource } from "./personApi";
import {Person} from "./Person"
import {Num} from "./Num"

export default function App() {
  const resource = createResource()

  return (
    <div>
      <Suspense fallback= {<h1>Loading... Person</h1>}>
        <Person resource={resource} />
      </Suspense>
      <Suspense fallback= {<h1>Loading... Number</h1>}>
        <Num resource={resource} />
      </Suspense>
    </div>
  )
}
