import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function SuccessBox(type) {


    const refreshPage = () => {
        window.location.reload();
    }


    return(
        <>
            <Alert variant="success">
                <Alert.Heading>Successfully created new {type}</Alert.Heading>
                <div className="d-flex">
                <Button onClick={() => refreshPage()} variant="outline-sucess">
                    Continue
                </Button>
                </div>
            </Alert>
        </>
    );
}

export default SuccessBox;