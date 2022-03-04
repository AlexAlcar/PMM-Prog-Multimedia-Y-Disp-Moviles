import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <table>
        <tr className="headerApp">
          <td colspan='2'><Header /></td>
        </tr>
        <tr>
          <td className="menu"><Menu titulo={'Menú principal'}/></td>
          <td className="body"><Body /></td>
        </tr>
        <tr>
          <td colspan='2'><Footer /></td>
        </tr>

    </table>
  );
}

export default App;
