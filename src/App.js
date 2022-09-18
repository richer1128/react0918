import Notification from "./Notification";
import Popup from "./Popup";
import "./App.css";
import LikeOfButton from "./LikeOfButton";
function goToNextPage() {
  window.location.href = "https://www.104.com.tw/";
}

function App() {
  return (
    <div className="App">
      <Popup onClose={goToNextPage}>
        <Notification title="this is" message=" angel " severity="general" />
        <Notification title="that is " message="dog" severity="important" />
        <Notification title="those is " message="girl " severity="urgent" />
        Placeholder notice content.
      </Popup>
      <LikeOfButton/>
      <LikeOfButton liked={true} likeCount={0}/>
    </div>
  );
}

export default App;
