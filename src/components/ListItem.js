import { useEffect, useState } from 'react';

export default function ListItem(props) {
    const [serviceType, setServiceType] = useState("Service Type ");
    const [variationType, setVariationType] = useState("Variation Type ");
    const [varProps, setVarProps] = useState([]);

    useEffect(() => {
        const arr = props.item.Variations;
        for (let i = 0; i < arr.length; i++) {

            if (arr[i].primaryLanguageVariationName === variationType) {

                setVarProps(arr[i].VariationProperties);

                break;
            }
        }
    }, [variationType])

    if (!props.item.showOn) {
        return <></>;
    }

    return (
        <div className='container borders mx-2 my-5'>
            <div className="my-2 fs-5">
                Service ID: <span className='badge bg-primary'>{props.item.id}</span>
            </div>

            <div className="my-2 fs-5">
                Store ID: <span className='badge bg-primary'>{props.item.storeId}</span>
            </div>

            <div className='my-2 fs-5'>
                Service Name: <span className='badge bg-primary'>{props.item.primaryServiceName}</span>
            </div>

            <div className="my-2 fs-5">
                Category ID: <span className='badge bg-primary'>{props.item.categoryId}</span>
            </div>

            <div className='my-2 fs-5'>
                Category: <span className='badge bg-primary'>{props.item.category.name.en} min</span>
            </div>

            <div className="my-2 fs-5">
                Sub-Category ID: <span className='badge bg-primary'>{props.item.subcategoryId}</span>
            </div>

            <div className='my-2 fs-5'>
                Sub-Category: <span className='badge bg-primary'>{props.item.subcategory.name.en} min</span>
            </div>

            <div className='my-2 fs-5'>
                Language Description: <span className='badge bg-primary'>{props.item.primaryLanguageDesc}</span>
            </div>

            <div className='my-2 fs-5'>
                Time to Book: <span className='badge bg-primary'>{props.item.allowTimeToBookInMinutes} min</span>
            </div>

            <div className="dropdown">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {serviceType}
                </button>
                <ul className='dropdown-menu'>
                    {
                        props.item.ServiceTypeRelations.map((item) => {
                            return (
                                <li><button className="dropdown-item" onClick={() => { setServiceType(item.ServiceType.name.en) }} type="button">{item.ServiceType.name.en}</button></li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='d-flex'>
                <div>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {variationType}
                        </button>
                        <ul className='dropdown-menu'>
                            {
                                props.item.Variations.map((item) => {
                                    return (
                                        <li><button className="dropdown-item" onClick={() => { setVariationType(item.primaryLanguageVariationName) }} type="button">{item.primaryLanguageVariationName}</button></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='my-2 mx-2 fs-5'>
                    {varProps.map((item) => {
                        return (
                            <div key={item.key}>
                                <span>{item.value} </span> <span>{item.key}</span>
                            </div>
                        )
                    })}
                </div>
            </div>



            <div className='my-2'>
                <h5 className='fs-3'>Service Pictures:</h5>
                {props.item.servicePictures.length !== 0 ? <div className='grid'>
                    {
                        props.item.servicePictures.map((item) => {
                            return (
                                <div><img className='image border my-1 mx-1' src={item?.s3URL || "https://marketmentors.com/assets/not_available.png"} alt="image not found" /></div>
                            )
                        })
                    }
                </div> : <div className='thumbnail'></div>}
            </div>

            <div className='my-2'>
                <h5 className='fs-3'>More Pictures: </h5>
                {props.item.Uploads.length !== 0 ? <div className='grid'>
                    {
                        props.item.Uploads.map((item) => {
                            return (
                                <div><img className='image border my-1 mx-1' src={item.s3URL} alt="image not found" /></div>
                            )
                        })
                    }
                </div> : <div className='thumbnail'></div>}
            </div>
        </div>
    )
}