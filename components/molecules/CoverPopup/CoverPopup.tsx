import Button from 'Components/atoms/Button/Button';
import Icon from 'Components/atoms/Icon/Icon';
import Image from 'Components/atoms/Image/Image';
import Input from 'Components/atoms/Input/Input';
import {
  StyledCoverPopup,
  StyledCoverPopupContent,
  StyledCoverPopupGallery,
  StyledCoverPopupNoResults,
} from 'Components/molecules/CoverPopup/CoverPopup.style';
import PopupHeader from 'Components/molecules/PopupHeader/PopupHeader';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
}

interface CoverPopupProps {
  setCover: Dispatch<SetStateAction<string>>;
  attachmentSide?: 'left' | 'right';
}

const CoverPopup = ({ setCover, attachmentSide = 'left' }: CoverPopupProps) => {
  const [isVisibilityDropdownOpen, setIsVisibilityDropdownOpen] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleVisibilityDropdownOpen = () => setIsVisibilityDropdownOpen(prevState => !prevState);

  const getPhotos = async () => {
    if (!inputValue.length) return;
    const res = await fetch(`https://api.pexels.com/v1/search?query=${inputValue}`, {
      headers: {
        Authorization: '563492ad6f9170000100000190e752762b254181834d11d79d90a251',
      },
      method: 'GET',
    });
    const response = await res.json();
    setPhotos(response.photos);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  return (
    <StyledCoverPopup
      anchor={
        <Button
          color='gray3'
          width='100%'
          onClick={handleVisibilityDropdownOpen}
          backgroundColor='gray6'
          variant='h4'
          icon={<Icon name='image' color='gray2' size='12' />}
        >
          Cover
        </Button>
      }
      attachmentSide={attachmentSide}
      closePopup={() => setIsVisibilityDropdownOpen(false)}
      isOpen={isVisibilityDropdownOpen}
    >
      <StyledCoverPopupContent>
        <PopupHeader label='Photo Search' description='Search for photos' />
        <Input
          value={inputValue}
          onChange={handleOnChange}
          placeholder='Keywords...'
          button={
            <Button
              icon={<Icon name='magnifying-glass' color='white' size='12' />}
              onClick={getPhotos}
            />
          }
        />
        <StyledCoverPopupGallery>
          {photos.length ? (
            photos?.map(photo => {
              return (
                <Image
                  onClick={() => setCover(photo.src.original)}
                  src={photo.src.tiny}
                  alt={photo.alt}
                  width={50}
                  height={50}
                  key={photo.id}
                  style={{ objectFit: 'cover' }}
                />
              );
            })
          ) : (
            <StyledCoverPopupNoResults>No Results</StyledCoverPopupNoResults>
          )}
        </StyledCoverPopupGallery>
      </StyledCoverPopupContent>
    </StyledCoverPopup>
  );
};

export default CoverPopup;
