import images from '../../assets/images';
import Status from '../Character/Status/Status';

const Avatar = () => {
  return (
    <div className="Avatar">
      <img src={images.avatar} alt="" className="avatarImage" />
      {/* <Status /> */}
    </div>
  );
};

export default Avatar;
