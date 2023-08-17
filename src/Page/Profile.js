import React from 'react'
import Iframe from 'react-iframe';


const Profile = ({ data }) => {
 
  return (
    <React.Fragment>
      <div className='btm_hdng'>
        <div className='profile_div'>
          <div className='pro_left_div'>
            <img className='pro_left_div_img' src={data?.profilepicture} alt={`Profile of ${data?.name}`} />
            <h4>{data?.name}</h4>
            <div className='pro_txt_dtl'>
              <div className='pro_txt'>
                <span className='pro_text_span'>Username :</span><h4>{data?.username}</h4>
              </div>
              <div className='pro_txt'>
                <span className='pro_text_span'>e-mail :</span><h4>{data?.email}</h4>

              </div>
              <div className='pro_txt'>
                <span className='pro_text_span'>Phone :</span><h4>{data?.phone}</h4>
              </div>
              <div className='pro_txt'>
                <span className='pro_text_span'>Website :</span><h4>{data?.website}</h4>
              </div>
            </div>
            <hr className='pro_text_hr' />
            <span className='pro_text_span'>Company</span>
            <div className='pro_txt'>
              <span className='pro_text_span'>Name :</span><h4>{data?.company.name}</h4>
            </div>
            <div className='pro_txt'>
              <span className='pro_text_span'>catchPhrase
                :</span><h4>{data?.company.catchPhrase
                }</h4>
            </div>
            <div className='pro_txt'>
              <span className='pro_text_span'>bs :</span><h4>{data?.company.catchPhrase
              }</h4>
            </div>
          </div>


          <div className='pro_right_div'>
            <span className='pro_text_span'>Address :</span>
            <div className='pro_txt'>
              <span className='pro_text_span'>street :</span><h4>{data?.address.street}</h4>
            </div>
            <div className='pro_txt'>
              <span className='pro_text_span'>suite :</span><h4>{data?.address.suite}</h4>
            </div>
            <div className='pro_txt'>
              <span className='pro_text_span'>city :</span><h4>{data?.address.city}</h4>
            </div>
            <div className='pro_txt'>
              <span className='pro_text_span'>zipcode :</span><h4>{data?.address.zipcode}</h4>
            </div>
            <div className='pro_right_iframe'>
              <Iframe width="100%" loading='lazy'
                height="450px" styles={{ borderRadius: "25px" }}
                src={`https://maps.google.com/maps?q=loc:${data?.address.geo.lat},${data?.address.geo.lng}
          &t=&z=13&ie=UTF8&iwloc=&output=embed`}>

              </Iframe>

            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Profile