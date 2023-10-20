// Devoir.js
import React, { useState } from 'react';

function Devoir({ nom, lien }) {
  const [note, setNote] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleCommentaireChange = (e) => {
    setCommentaire(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Note: ${note}, Commentaire: ${commentaire}`);
    setIsEditing(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  }

    const styles = {
      devoir: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px 0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative', 
        minHeight: '400px',
        minWidth: '250px',
        marginRight: '16px',
      },
      title: {
        fontSize: '20px',
        marginBottom: '12px'
      },
      link: {
        color: '#007BFF',
        textDecoration: 'none',
        marginBottom: '16px',
        display: 'block'
      },
      form: {
        marginTop: '16px'
      },
      label: {
        display: 'block',
        marginBottom: '8px'
      },
      input: {
        padding: '8px',
        width: '90%',
        marginBottom: '12px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      },
      textarea: {
        width: '90%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minHeight: '80px',
        marginBottom: '12px'
      },
      button: {
        padding: '8px 16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        position: 'absolute', // Positionne le bouton en bas à droite de la card
        bottom: '16px',
        right: '16px'
      }
    };

  return (
    <div style={styles.devoir}>
      <h2 style={styles.title}>{nom}</h2>
      <a href={lien} target="_blank" rel="noopener noreferrer" style={styles.link}>Voir le devoir</a>
      {isEditing ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div>
            <label style={styles.label}>Note: </label>
            <input type="text" value={note} onChange={handleNoteChange} placeholder="Entrez une note" style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Commentaire: </label>
            <textarea value={commentaire} onChange={handleCommentaireChange} placeholder="Entrez un commentaire" style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Soumettre</button>
        </form>
      ) : (
        <>
          <div>
            <p>Note:</p> 
            <p>{note}</p>
          </div>
          <div>
            <p>Commentaire:</p>
            <p>{commentaire}</p>
            </div>
          <button onClick={handleEdit} style={styles.button}>Modifier</button>
        </>
      )}
    </div>
  );
}

export default Devoir;
