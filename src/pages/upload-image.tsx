import React, { useState, useRef } from 'react';
import type { HeadFC } from "gatsby";
import Layout from '../components/layout';
import { CheckCircle } from '@phosphor-icons/react';
import Modal from '../components/modal';

interface ImageForm {
  id: number;
  src: string | ArrayBuffer | null;
  title: string;
  category: string;
  tags: string;
  description: string;
  price: string;
}

const ImageUpload: React.FC = () => {
  const [imageForms, setImageForms] = useState<ImageForm[]>([]);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageForms(prevForms => [
            ...prevForms,
            {
              id: Date.now(),
              src: reader.result,
              title: '',
              category: '',
              tags: '',
              description: '',
              price: ''
            }
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageForms(prevForms => [
            ...prevForms,
            {
              id: Date.now(),
              src: reader.result,
              title: '',
              category: '',
              tags: '',
              description: '',
              price: ''
            }
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleBrowseClick = () => {
    inputFileRef.current?.click();
  };

  const handleInputChange = (id: number, field: keyof ImageForm, value: string) => {
    setImageForms(prevForms =>
      prevForms.map(form =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  const handleDelete = (id: number) => {
    setImageForms(prevForms => prevForms.filter(form => form.id !== id));
  };

  return (
    <Layout active="partner">
      <div className='container relative'>
        <div className='pt-5 pb-40 px-4 md:pt-20'>
          <div className='bg-[#520b1f21] relative rounded-2xl px-10 pt-20 pb-40 text-center'>
            <h1 className='text-3xl font-bold pb-8 text-[#520B1F]'>Upload Images</h1>
            <p className='text-sm pb-4 text-[#333333]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh dui, vulputate ut est sed, ornare auctor ante.
            </p>
            <p className='text-sm pb-4 text-[#333333]'>
              4 MB | 1080p | Copyright Free | Something | Another thing | And yet another
            </p>
            <div className='absolute -bottom-24 left-0 w-full'>
              <div className='flex justify-center'>
                <div className='bg-white rounded-2xl p-4 shadow-md'>
                  <div
                    className='border border-dashed border-[#520B1F] rounded-2xl py-10 px-40'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      ref={inputFileRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                    />
                    <div className='flex flex-col justify-between gap-4 items-center w-full'>
                      <div className='text-[#520B1F] font-bold text-xl'>Drag & Drop Images here</div>
                      <div>or</div>
                      <div>
                        <button
                          className='text-white bg-[#520B1F] font-bold w-full px-6 py-2 text-sm rounded-full'
                          onClick={handleBrowseClick}
                        >
                          Browse Files
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
            {imageForms.map((form, index) => (
                <div className='bg-[#520b1f21] rounded-2xl px-10 mt-40 p-10 text-center'>
              <div key={form.id} className='flex flex-col md:flex-row items-start gap-10 py-10 '>
                <div className='w-fit'>
                  <div className='rounded-2xl overflow-hidden w-96 h-80'>
                    {form.src && (
                      <img src={form.src as string} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                    )}
                  </div>
                </div>
                <div className='flex-grow'>
                  <form>
                    <div className='grid grid-cols-1 text-left md:grid-cols-2 gap-4'>
                      <div>
                        <label className='text-sm font-bold text-[#5C5C5C]'>Title</label>
                        <input
                          type="text"
                          className='w-full mt-1 rounded-full px-4 py-2'
                          value={form.title}
                          onChange={(e) => handleInputChange(form.id, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className='text-sm font-bold text-[#5C5C5C]'>Category</label>
                        <input
                          type="text"
                          className='w-full mt-1 rounded-full px-4 py-2'
                          value={form.category}
                          onChange={(e) => handleInputChange(form.id, 'category', e.target.value)}
                        />
                      </div>
                      <div className='md:col-span-2'>
                        <label className='text-sm font-bold text-[#5C5C5C]'>Tags</label>
                        <input
                          type="text"
                          className='w-full mt-1 rounded-full px-4 py-2'
                          value={form.tags}
                          onChange={(e) => handleInputChange(form.id, 'tags', e.target.value)}
                        />
                      </div>
                      <div className='md:col-span-2'>
                        <label className='text-sm font-bold text-[#5C5C5C]'>Description</label>
                        <textarea
                          className='w-full mt-1 rounded-3xl px-4 py-2'
                          rows={5}
                          value={form.description}
                          onChange={(e) => handleInputChange(form.id, 'description', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className='text-sm font-bold text-[#5C5C5C]'>Price</label>
                        <input
                          type="text"
                          className='w-full mt-1 rounded-full px-4 py-2'
                          value={form.price}
                          onChange={(e) => handleInputChange(form.id, 'price', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='flex justify-end pt-4'>
                      <button
                        type="button"
                        className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2"
                        onClick={() => handleDelete(form.id)}
                      >
                        Delete Image
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            ))}
          
{imageForms.length > 0 && (
    <div className='flex justify-end pt-24'>
    <button onClick={() => setShowModal(true)} className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">
      Save
    </button>
  </div>
)}
          
        </div>
      </div>
      {showModal &&
                <Modal bigModal={true} back='bg-[#DCCED2]' handleClose={() => setShowModal(false)}
                    Content={
                        <div>
                            <div className='flex items-center justify-center pb-1'>
                                <div className='bg-[#80BA7B]  rounded-full p-10'>
                                    <CheckCircle size={80} color='' />
                                </div>
                            </div>
                            <div className='font-bold text-[#520B1F] text-2xl pb-4 pt-8 text-center'>Upload Successful!</div>
                            <div className='text-sm font-bold text-[#5C5C5C] text-center'>Your image(s) have been uploaded successfully. However, you’ll need to wait till they are approved to see them on your profile...</div>
                            <div className='flex justify-center pt-8'>
        <button onClick={() => window.location.reload()} className="bg-[#520B1F] text-white rounded-full px-10 md:px-14 text-sm py-2">Close</button>
        </div>
                        </div>
                    }
                />}
    </Layout>
  );
};

export default ImageUpload;

export const Head: HeadFC = () => <title>Image Upload - Bcart</title>;