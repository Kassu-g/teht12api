import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:bookName" element={<BookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
function HomePage() {
  return <h1>Books</h1>;
}
function BookPage() {
  const { bookName } = useParams<{ bookName: string }>();
  return (
    <div>
      <h1>Book: {bookName}</h1>
    </div>
  );
}
function NotFoundPage() {
  return <h1>not found</h1>;
}

export default App;
