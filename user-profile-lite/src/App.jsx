import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <UserProfile
        name="Vignesh Kalyanasundaram"
        bio="Full-stack developer passionate about creating user-friendly applications."
        profileImage="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      />
      <UserProfile
        name="Jachin Thilak"
        bio="Full-stack developer passionate about creating user-friendly applications."
        profileImage="https://images.unsplash.com/photo-1502764613149-7f1d229e2300?w=150&h=150&fit=crop&crop=face"
      />
    </div>
  );
}

export default App;