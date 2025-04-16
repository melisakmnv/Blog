import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
          <h1 className="text-3xl font-bold text-center">Create Your Story</h1>
    
          <form className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <Input placeholder="Enter your blog title..." />
            </div>
    
            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Short Description</label>
              <Textarea placeholder="Brief summary of your blog post..." />
            </div>
    
            {/* Category / Tags */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
    
            {/* Content */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <div className="bg-white h-[500px]">
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  style={{ height: '480px' }}
                />
              </div>
            </div>
    
            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline">Save as Draft</Button>
              <Button type="submit">Publish</Button>
            </div>
          </form>
        </div>
      );
}