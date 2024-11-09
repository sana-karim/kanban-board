import './App.css';
import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';
import { CardContainer } from './components/CardContainer';
import { useState } from 'react';
import { OPTION_DATA } from './constants/constant';

function App() {
  const [backlog, setBacklog] = useState([]);
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [done, setDone] = useState([]);

  const getItemInfo = (itemInfo) => {

    if (itemInfo.optionValue === OPTION_DATA[0].id) {
      setBacklog(handleBucketData(backlog, itemInfo));

    } else if (itemInfo.optionValue === OPTION_DATA[1].id) {
      setTodo(handleBucketData(todo, itemInfo));

    } else if (itemInfo.optionValue === OPTION_DATA[2].id) {
      setOngoing(handleBucketData(ongoing, itemInfo));

    } else if (itemInfo.optionValue === OPTION_DATA[3].id) {
      setDone(handleBucketData(done, itemInfo));
    }
  }

  const handleBucketData = (bucket, itemInfo) => {
    let itemData = [...bucket, itemInfo];
    return itemData;
  }

  // const tempFunction = () => {
  //   let backlogCpy = [...backlog];
  //   let lastItem = backlogCpy.pop();
  //   setBacklog(backlogCpy);
  //   let todoCpy = [...todo, lastItem];
  //   setTodo(todoCpy);
  // }

  const handleLeftBtnClk = (bucketData) => {
    let poppedItem = {};
    if (bucketData.optionValue === OPTION_DATA[1].id) {
      let todoCpy = [...todo];
      let backlogCpy = [...backlog];
      for (let i = 0; i < todoCpy.length; i++) {
        if (todoCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = todoCpy.splice(i, 1);
          poppedItem[0].optionValue -= 1;
          setTodo(todoCpy);
        }
      }
      backlogCpy.push(poppedItem[0]);
      setBacklog(backlogCpy);

    } else if (bucketData.optionValue === OPTION_DATA[2].id) {
      let ongoingCpy = [...ongoing];
      let todoCpy = [...todo];
      for (let i = 0; i < ongoingCpy.length; i++) {
        if (ongoingCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = ongoingCpy.splice(i, 1);
          poppedItem[0].optionValue -= 1;
          setOngoing(ongoingCpy);
        }
      }
      todoCpy.push(poppedItem[0]);
      setTodo(todoCpy);


    } else if (bucketData.optionValue === OPTION_DATA[3].id) {
      let doneCpy = [...done];
      let ongoingCpy = [...ongoing];
      for (let i = 0; i < doneCpy.length; i++) {
        if (doneCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = doneCpy.splice(i, 1);
          poppedItem[0].optionValue -= 1;
          setDone(doneCpy);
        }
      }
      ongoingCpy.push(poppedItem[0]);
      setOngoing(ongoingCpy);
    }
    console.log("Appjs function Called", bucketData)
  }



  const handleRightBtnClk = (bucketData) => {
    console.log(bucketData);
    let poppedItem = {};
    if (bucketData.optionValue === OPTION_DATA[0].id) {
      let backlogCpy = [...backlog];
      let todoCpy = [...todo];
      for (let i = 0; i < backlogCpy.length; i++) {
        if (backlogCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = backlogCpy.splice(i, 1);
          poppedItem[0].optionValue += 1;
          setBacklog(backlogCpy);
          console.log(poppedItem);
          console.log(backlogCpy);
        }
      }

      console.log("Popped data", poppedItem);
      todoCpy.push(poppedItem[0]);  //Check it after removing 0, any other solution of this?
      setTodo(todoCpy);

      console.log("todoCpy          ", todoCpy);
      console.log("todo Data          ", todo);
      console.log("popped Item          ", poppedItem);
    } else if (bucketData.optionValue === OPTION_DATA[1].id) {
      console.log(poppedItem)
      let todoCpy = [...todo];
      let ongoingCpy = [...ongoing];
      // let poppedItem = {};
      for (let i = 0; i < todoCpy.length; i++) {
        if (todoCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = todoCpy.splice(i, 1);
          poppedItem[0].optionValue += 1;
          setTodo(todoCpy);
        }
      }
      ongoingCpy.push(poppedItem[0]);
      setOngoing(ongoingCpy);

    } else if (bucketData.optionValue === OPTION_DATA[2].id) {
      let ongoingCpy = [...ongoing];
      let doneCpy = [...done];
      for (let i = 0; i < ongoingCpy.length; i++) {
        if (ongoingCpy[i].generatedId === bucketData.generatedId) {
          poppedItem = ongoingCpy.splice(i, 1);
          poppedItem[0].optionValue += 1;
          setOngoing(ongoingCpy);
        }
      }
      doneCpy.push(poppedItem[0]);
      setDone(doneCpy);
    }
    // console.error("right-Btn Clicked app js", bucketData);
  }



  //new code
  const handleDeleteBtn = (bucketData) => {   /* improve this code using functions */
    debugger;
    if (bucketData.optionValue === OPTION_DATA[0].id) {
      let backlogCpy = [...backlog]
      for (let i = 0; i < backlogCpy.length; i++) {
        if (backlogCpy[i].generatedId === bucketData.generatedId) {
          backlogCpy.splice(i, 1);
          setBacklog(backlogCpy);
        }
      }
    } else if (bucketData.optionValue === OPTION_DATA[1].id) {
      console.log('kya hum click ho rahe hain?',)
      let todoCpy = [...todo]
      for (let i = 0; i < todoCpy.length; i++) {
        if (todoCpy[i].generatedId === bucketData.generatedId) {
          todoCpy.splice(i, 1);
          setTodo(todoCpy);
        }
      }
    } else if (bucketData.optionValue === OPTION_DATA[2].id) {
      let ongoingCpy = [...ongoing];
      for (let i = 0; i < ongoingCpy.length; i++) {
        if (ongoingCpy[i].generatedId === bucketData.generatedId) {
          ongoingCpy.splice(i, 1);
          setOngoing(ongoingCpy);
        }
      }
    } else if (bucketData.optionValue === OPTION_DATA[3].id) {
      console.log('hrllo')
      let doneCpy = [...done];
      for (let i = 0; i < doneCpy.length; i++) {
        if (doneCpy[i].generatedId === bucketData.generatedId) {
          doneCpy.splice(i, 1);
          setDone(doneCpy);
        }
      }
    }

  }

  return (
    <div className="App">
      {/* <button onClick={tempFunction}>Button</button> */}
      <Header />
      <CreateTask sendSelectedBucket={getItemInfo} />
      <CardContainer backlogData={backlog} todoData={todo} ongoingData={ongoing} doneData={done} leftBtnClk={handleLeftBtnClk} rightBtnClk={handleRightBtnClk} deleteBtnClk={handleDeleteBtn} />
    </div>
  );
}

export default App;
