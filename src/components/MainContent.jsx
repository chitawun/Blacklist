import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, Upload, Plus, Download } from 'lucide-react';
import RegistrationForm from './RegistrationForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const MainContent = () => {
  const [registrations, setRegistrations] = useState([
    { id: 1, plate: '8กก 788', image: '2bbeca38d231899faf1e7bd37496adfa.png', group: 'Blacklist', dateAdded: '10/07/2567', dateModified: '10/07/2567', owner: 'นายสุพจน์ พลอยวัฒน์', department: 'หน่วยงาน xxxxx', status: 'Active' },
    { id: 2, plate: '1กข 123', image: '73d14ab0587213f9f404354aa910a80d.png', group: 'VIP', dateAdded: '11/07/2567', dateModified: '11/07/2567', owner: 'นางสาวสมศรี ใจดี', department: 'หน่วยงาน yyyyy', status: 'Active' },
    { id: 3, plate: '9ขค 456', image: 'public/7909_Vegan.jpg', group: 'MEMBER', dateAdded: '12/07/2567', dateModified: '12/07/2567', owner: 'นายวิชัย รักเรียน', department: 'หน่วยงาน zzzzz', status: 'Inactive' },
  ]);

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRegistration, setCurrentRegistration] = useState(null);

  const handleAdd = (newRegistration) => {
    setRegistrations([...registrations, { ...newRegistration, id: Date.now(), dateAdded: new Date().toLocaleDateString('th-TH'), dateModified: new Date().toLocaleDateString('th-TH') }]);
  };

  const handleEdit = (updatedRegistration) => {
    setRegistrations(registrations.map(reg => reg.id === updatedRegistration.id ? { ...updatedRegistration, dateModified: new Date().toLocaleDateString('th-TH') } : reg));
  };

  const handleDelete = () => {
    setRegistrations(registrations.filter(reg => reg.id !== currentRegistration.id));
    setIsDeleteDialogOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">รายการทะเบียนพิเศษ</h2>
      <div className="mb-4 space-x-2">
        <Button><Upload className="mr-2" /> นำเข้าข้อมูล</Button>
        <Button onClick={() => setIsAddFormOpen(true)}><Plus className="mr-2" /> เพิ่มทะเบียนพิเศษ</Button>
        <Button><Download className="mr-2" /> ส่งออกการค้นหา</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ทะเบียน</TableHead>
            <TableHead>รูป</TableHead>
            <TableHead>กลุ่มทะเบียน</TableHead>
            <TableHead>วันที่เพิ่ม</TableHead>
            <TableHead>วันที่แก้ไข</TableHead>
            <TableHead>เจ้าของข้อมูล</TableHead>
            <TableHead>หน่วยงาน</TableHead>
            <TableHead>สถานะ</TableHead>
            <TableHead>การดำเนินการ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrations.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.plate}</TableCell>
              <TableCell><img src={row.image} alt="Car" className="w-16 h-16 object-cover" /></TableCell>
              <TableCell>{row.group}</TableCell>
              <TableCell>{row.dateAdded}</TableCell>
              <TableCell>{row.dateModified}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => { setCurrentRegistration(row); setIsEditFormOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => { setCurrentRegistration(row); setIsDeleteDialogOpen(true); }}><Trash2 className="h-4 w-4" /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <RegistrationForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onSubmit={handleAdd}
      />

      <RegistrationForm
        isOpen={isEditFormOpen}
        onClose={() => setIsEditFormOpen(false)}
        onSubmit={handleEdit}
        initialData={currentRegistration}
      />

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>ยืนยันการลบข้อมูล</DialogTitle>
          </DialogHeader>
          <p>คุณแน่ใจหรือไม่ที่ต้องการลบทะเบียน {currentRegistration?.plate}?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>ยกเลิก</Button>
            <Button variant="destructive" onClick={handleDelete}>ลบ</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainContent;