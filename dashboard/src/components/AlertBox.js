import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function AlertBox(type) {


    const refreshPage = () => {
        window.location.reload();
    }


    return(
        <>
            <Alert variant="danger">
                <Alert.Heading>Error while creating new {type}</Alert.Heading>
                <p>
                    Error occured while uploading {type}, please try again!
                </p>
                <div className="d-flex">
                <Button onClick={() => refreshPage()} variant="outline-danger">
                    Refresh
                </Button>
                </div>
            </Alert>
        </>
    );
}

export default AlertBox;