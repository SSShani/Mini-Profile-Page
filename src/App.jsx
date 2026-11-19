import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ProfileCard
        name="Dana"
        description="My best friend since kindergarten."
        avatar="https://i.pravatar.cc/150?img=47"
        type="friend"
        buttonText="Message"
      />
      <ProfileCard
        name="Mr. Cohen"
        description="Math teacher with 20 years of experience."
        avatar="https://i.pravatar.cc/150?img=12"
        type="teacher"
        buttonText="Contact"
      />
      <ProfileCard
        name="Noam"
        description="Student in my class who loves coding."
        avatar="https://i.pravatar.cc/150?img=33"
        type="student"
        buttonText="Follow"
      />
      <Footer />
    </div>
  );
}

export default App;