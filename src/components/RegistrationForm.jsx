import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const RegistrationForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = React.useState(initialData || {
    plate: '',
    group: '',
    owner: '',
    department: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? 'แก้ไขทะเบียน' : 'เพิ่มทะเบียนใหม่'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="plate" value={formData.plate} onChange={handleChange} placeholder="ทะเบียน" required />
          <Select name="group" value={formData.group} onValueChange={(value) => handleChange({ target: { name: 'group', value } })}>
            <SelectTrigger>
              <SelectValue placeholder="เลือกหมวดหมู่ทะเบียน" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Blacklist">Blacklist</SelectItem>
              <SelectItem value="VIP">VIP</SelectItem>
              <SelectItem value="MEMBER">MEMBER</SelectItem>
            </SelectContent>
          </Select>
          <Input name="owner" value={formData.owner} onChange={handleChange} placeholder="เจ้าของข้อมูล" required />
          <Input name="department" value={formData.department} onChange={handleChange} placeholder="หน่วยงาน" required />
          <Select name="status" value={formData.status} onValueChange={(value) => handleChange({ target: { name: 'status', value } })}>
            <SelectTrigger>
              <SelectValue placeholder="เลือกสถานะ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button type="submit">{initialData ? 'บันทึกการแก้ไข' : 'เพิ่มทะเบียน'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;