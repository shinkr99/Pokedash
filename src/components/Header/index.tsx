import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AppState, setSearch } from "../../store";

function Header() {
  const search = useSelector<AppState>((state) => state.search) as string
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = () => navigate(`/search/${search}`)

  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid="lg">
        <Link to="/">
          <Navbar.Brand>
            Pokedash
          </Navbar.Brand>
        </Link>
        <Form className="form-inline">
          <FormControl type="text" placeholder="Search" value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
          <Button variant="success" onClick={handleSearch}>Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header