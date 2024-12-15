import './App.css'
import { observer } from "mobx-react-lite"
import Code from "./Components/Code/Code.tsx";
import Task from "./Components/Task/Task.tsx";
import Splitter from "antd/es/splitter";
import {useEffect, useState} from "react";
import {getRatio} from "./util.ts";
import {Console} from "./Components/Console/Console.tsx";

const App = observer (() => {

    const [ratio , setRatio] = useState<number>(getRatio());

    const updateRatio = () => {
        const {innerWidth, innerHeight} = window
        setRatio(innerWidth / innerHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", updateRatio);
        return () => {
            window.removeEventListener("resize", updateRatio);
        }
    }, [])

  return (
      <>
          <div className="header">
              <h1>Nano leet-code emulator</h1>
          </div>
          <div className="content" >
              <Splitter layout={ratio < 1 ? "vertical" : "horizontal" }>
                  <Splitter.Panel min={ratio < 1.2 ? "5%" : "3%"} collapsible={true}>
                      <Task/>
                  </Splitter.Panel>
                  <Splitter.Panel min={ratio < 1.2 ? "5%" : "3%"} collapsible={true}>
                      <Splitter layout="vertical">
                          <Splitter.Panel collapsible={true}>
                              <Code/>
                          </Splitter.Panel >
                          <Splitter.Panel collapsible={true} min={"10%"}>
                              <Console/>
                          </Splitter.Panel>
                      </Splitter>


                  </Splitter.Panel>
              </Splitter>
          </div>
          <div className="footer">
              <a target="_blank" href="http://salary-calculator.ru">Заходи считать зарплату на salary-calculator.ru!</a>
          </div>
      </>
  )
})

export default App

