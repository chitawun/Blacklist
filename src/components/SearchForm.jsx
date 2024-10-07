import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const SearchForm = () => {
  return (
    <form className="space-y-4">
      <h3 className="text-lg font-semibold">เงื่อนไขการค้นหา</h3>
      <Input placeholder="หมายเลขทะเบียน" />
      <Input placeholder="เลขทะเบียน" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="เลือกหมวดจังหวัด" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bkk">กรุงเทพมหานคร</SelectItem>
          <SelectItem value="cnx">เชียงใหม่</SelectItem>
          {/* Add more provinces as needed */}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="เลือกประเภททะเบียน" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Blacklist">Blacklist</SelectItem>
          <SelectItem value="VIP">VIP</SelectItem>
          <SelectItem value="MEMBER">MEMBER</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="หน่วยงานเจ้าของข้อมูล" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="เลือกสถานะข้อมูล" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <div className="space-x-2">
        <Button type="submit">ค้นหา</Button>
        <Button type="reset" variant="outline">ล้างข้อมูล</Button>
      </div>
    </form>
  );
};

export default SearchForm;