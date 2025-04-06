import express from 'express';
import { createCertification, deleteCertification, getAllCertifications, getCertification, updateCertification } from '../controller/certification.js';

const CertificationRouter = express.Router();

// create
CertificationRouter.post('/', createCertification);

// update
CertificationRouter.put('/:id', updateCertification);

// delete
CertificationRouter.delete('/:id', deleteCertification);

// get by id
CertificationRouter.get('/:id', getCertification);

// get all
CertificationRouter.get('/', getAllCertifications);

export default CertificationRouter;