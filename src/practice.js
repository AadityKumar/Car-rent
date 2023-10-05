<div>
    <div className="card">
        <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_640.jpg" />
        <div className="card-body">
            <p>
                <BiMap /> 8558 Pecan St.
            </p>
            <h5 className="card-text">
                RCE Theaters-907 S Beckford Dr,Henderson, NC 27536
            </h5>
            <div class="card-icon">
                <div class="icon">
                    <HiOutlineBuildingOffice2 />
                    <div class="name">3 Room</div>
                </div>

                <div class="icon">
                    <LiaBedSolid />
                    <div class="name">4 Bed</div>
                </div>

                <div class="icon">
                    <LiaBathSolid />
                    <div class="name">1 Bath</div>
                </div>

                <div class="icon">
                    <LiaArrowsAltSolid />
                    <div class="name">732 sft</div>
                </div>

            </div>

            <div className="princeAndReadMore">
                $7,256/month
                <button>Read More</button>
            </div>
        </div>
    </div>
</div>


.card{
    width: 400px;
    margin: 10px;
    padding: 10px 20px;
    border - radius: 20px;
    object - fit: cover;
    border: 1px solid wheat;

    img{
        border - radius: 20px;
        padding: 3px;
        width: 360px;
        cursor: pointer;
    }

    .card - icon {
        display: flex;
        flex - direction: row;
        align - items: center;
        gap: 30px;

        .icon {
            margin: 5px;
        }
    }

      .princeAndReadMore{
        display: flex;
        flex - direction: row;

        button{
            margin - left: auto;

        }
    }


}








