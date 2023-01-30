import logo from './logo.svg';
import './App.css';
import {useState}from'react';
import downArrow from './img/icon_arrow_Down.svg';
import downArrowcopy from './img/icon_arrow_Down_copy.svg';


function Nav(){
  return(
    <>
    
    <div className='left-16 bold-24'>
      구매하기
    </div>
    <div className='top-5'></div>
      <div className='left-16 thin-16'>
        [친환경/에코프렌들리] 꼬막 요리계의 혁명적 아이디어
      </div>

      </>
  )
}

function PointTable(){
  return(
    <div id="grid"className='both16 top-21'>
    <div className="a bold16">현재 보유 포인트
    <div className=" thin16 top-4">23,402P</div>
    </div>
    <div className="b bold16">거래 후 잔액
    <div className="d thin16 top-4">15,402P</div>
    </div>
  </div>
  )
}

function PointButton(){
  return(
    <>
    <button onclick="MessageInvoker.postMessage('충전하기');" className='point-button both16 top-11 flexbox-wrapper'>포인트 충전하기</button>
    </>
  )
}

function UsageTable(){
  return(
  <div>
    <div className="top-7px">
    </div>
    <table className="usage-table">
      <tr><th>상업적 용도</th><th>이용가능</th></tr>
      <tr><td className="td">특허출원</td><td className="td-available">불가능</td></tr>
    </table>
    </div>
  )
}


function UsageRangeToggle(){

  const [visible,setVisible]=useState(false);
  return(
    <div className="gray-border-bottom padding-bottom-18px">

  <div id="grid-1fr-1fr" className="bold-20px top-14">
      이용 가능 범위
      <button className="down-button text-align-right right-16"
        onClick={()=>{
          setVisible(!visible);
        }}
        >
          {visible?<img src={downArrow}></img>:<img src={downArrowcopy}></img>}
        </button>
        </div>
        {visible&&<Myinfo/>}
    </div>
  )
      }



const Myinfo=()=>{
  return(
    <>
    <div id="grid-1fr-1fr">

    <div className="thin-16px pad7">상업적 용도
    </div>
    <div className="text-align-right thin-16px pad7">이용 가능
    </div>
  </div>
  <div className="margin-top-8px"></div>
  <div id="grid-1fr-1fr" >
  <div id="text-align-left"className="thin-16px">특허 출원
  </div>
  <div className="text-align-right nope">불가능
  </div>
  </div>
  </>
    )
}


function App() {
  const title=['포인트 충전하기', '구매하기']
  const terms='번뜩은 회원 상호 간 콘텐츠 거래를 위한 중개 시스템을 제공할 뿐,\n회원을 대리하지 않습니다. 환급, 취소 등 회원 간 성립된 거래에 대한\n모든 책임은 회원이 직접 부담합니다.\n자세한 내용은 '
//post:변수
  let 참조해주세요='을 참고해 주세요.'
  return (
    <div className="App">
      <div className='body'>
    <Nav></Nav>

    <div className='line top-14'></div>

    <div className='bold20 left-16 top-18'>아이디어 가격</div>
    <div className='thin-16 left-16 top-7'>8,000P</div>
    <PointTable></PointTable>
    <div className='flexbox-wrapper left-16 right-16'>
    <button onClick="MessageInvoker.postMessage('여기에 명령어를 적어주세요');" className='point-button right-16 top-11'>포인트 충전하기</button>
    </div>
    <div className='top-25 greyline'></div>
    <UsageRangeToggle></UsageRangeToggle>
    <div className='grayback'>
      
    <div className="display-enter terms right-16">{terms}<span className="blue-text">이용약관</span>{참조해주세요}</div>
    <div className='graybottom flexbox-wrapper'>
    <div className='flexbox-wrapper left-16 right-16'>
    <button onClick="MessageInvoker.postMessage('여기에 명령어를 적어주세요');" className='buy-button'>구매하기</button>
    </div>
    <div className="gray-box-bottom">
      </div>
    </div>



    </div></div>
    </div>

    
  );
}

export default App;
