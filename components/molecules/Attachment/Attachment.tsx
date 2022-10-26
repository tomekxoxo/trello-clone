import Button from 'Components/atoms/Button/Button';
import Image from 'Components/atoms/Image/Image';
import Typography from 'Components/atoms/Typography/Typography';
import {
  StyledAttachment,
  StyledAttachmentButtons,
  StyledAttachmentDetails,
} from 'Components/molecules/Attachment/Attachment.style';
import { useState } from 'react';

export interface AttachmentProps {
  date: string;
  title: string;
  image?: null | string;
}

const Attachment = ({ date, title, image = null }: AttachmentProps) => {
  const [file] = useState(image || '/panorama.svg');

  const handleDownload = () => {
    return;
  };

  const handleDelete = () => {
    return;
  };

  return (
    <StyledAttachment>
      {file && <Image width={80} height={53} src={file} alt='thumbnail' />}
      <StyledAttachmentDetails>
        <Typography color='gray4' variant='h4'>
          {date}
        </Typography>
        <Typography color='dark' variant='h5'>
          {title}
        </Typography>
        <StyledAttachmentButtons>
          <Button
            variant='h5'
            borderColor='gray3'
            backgroundColor='white'
            onClick={handleDownload}
            color='gray3'
          >
            Download
          </Button>
          <Button
            color='gray3'
            variant='h5'
            borderColor='gray3'
            backgroundColor='white'
            onClick={handleDelete}
          >
            Delete
          </Button>
        </StyledAttachmentButtons>
      </StyledAttachmentDetails>
    </StyledAttachment>
  );
};

export default Attachment;
